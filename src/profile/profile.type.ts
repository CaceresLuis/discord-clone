import { Field, ObjectType } from '@nestjs/graphql';
import { Channel, Server } from 'src/server/types';

@ObjectType()
export class Profile {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => [Server], { nullable: true })
  servers: Server[];

  @Field({ nullable: true })
  imageUrl: string;

//   @Field(() => [Member], { nullable: 'itemsAndList' })
//   members: Member;

  @Field(() => [Channel], { nullable: 'itemsAndList' })
  channels: Channel;
}
