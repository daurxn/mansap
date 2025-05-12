import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const checkUserExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });

    if (checkUserExists) {
      throw new HttpException('User already registered', HttpStatus.FOUND);
    }

    const hashedPassword = await hash(data.password, 12);

    const userData = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      profile: {
        create: {},
      },
    };

    const createUser = await this.prisma.user.create({
      data: userData,
    });

    if (createUser) {
      return {
        statusCode: 200,
        message: 'Register Successful',
      };
    }
  }

  async login(data: LoginDto) {
    const checkUserExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!checkUserExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(
      data.password,
      checkUserExists.password,
    );

    if (checkPassword) {
      const accessToken = this.jwtService.sign({
        sub: checkUserExists.id,
        name: checkUserExists.name,
        email: checkUserExists.email,
        role: checkUserExists.role, // It's good practice to include role in JWT if needed for client-side logic or easy access
      });

      return {
        statusCode: 200,
        message: 'Login berhasil', // "Login successful" in Indonesian
        accessToken,
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async profile(user_id: number) {
    // This query can be expanded to include profile data if needed
    // For example, by adding:
    // include: {
    //   profile: {
    //     include: {
    //       location: true, // To also fetch related location details
    //     },
    //   },
    // },
    // Or using select for specific profile fields.
    return await this.prisma.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true, // Good to include ID
        name: true,
        email: true,
        role: true,
        // If you want to return the associated profile data:
        // profile: {
        //   select: {
        //     age: true,
        //     gender: true,
        //     bio: true,
        //     resume: true,
        //     location: { // Example of fetching nested relation
        //       select: {
        //         name: true
        //       }
        //     }
        //     // add other profile fields you want to return
        //   }
        // }
      },
    });
  }
}
