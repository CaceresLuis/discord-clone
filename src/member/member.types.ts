import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Server } from 'src/server/types';

@ObjectType()
export class Member {
  @Field()
  id: number;

  // @Field(() => Profile, {nullable: true})
  // profile: Profile;

  @Field()
  profileId: number;

  @Field(() => Server, { nullable: true })
  server: Server;

  @Field(() => MemberRole)
  role: MemberRole;

  @Field({ nullable: true })
  imageUrl: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  createAt: string;

  @Field({ nullable: true })
  UpdateAt: string;
}

export enum MemberRole {
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
}

registerEnumType(MemberRole, {
  name: 'MemberRole',
  description: 'Defines the role of a member on a server',
});
