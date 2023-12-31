import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Channel {
  @Field()
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => ChannelType)
  type: ChannelType;

  @Field()
  createAt: string;

  @Field()
  UpdateAt: string;

//   @Field(() => [Member], { nullable: true })
//   members: Member[];
}

export enum ChannelType {
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  VIDEO = 'VIDEO',
}

registerEnumType(ChannelType, {
  name: 'ChannelType',
  description: 'Defines the type of channel',
});

@ObjectType()
export class Server {
  @Field()
  id: number;

  @Field()
  name: string;
  
  @Field({ nullable: true })
  imageUrl: string;

  @Field({ nullable: true })
  inviteCode: string;

  @Field()
  profileId: number;

//   @Field(() => Profile, {nullable: true})
//   profile: Profile;

//   @Field(() => [Member], { nullable: true })
//   members: Member[];

  @Field(() => [Channel], { nullable: true })
  channels: Channel[];
}
