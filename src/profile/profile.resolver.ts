import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './profile.dto';
import { Profile } from './profile.type';

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Mutation()
  async createProfile(@Args('input') input: CreateProfileDto) {
    return this.profileService.createProfile(input);
  }

  @Query(() => Profile)
  async getProfileBiId(@Args('profileId') profileId: number) {
    return this.profileService.getProfileById(profileId);
  }
}
