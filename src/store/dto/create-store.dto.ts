import { Dto } from 'src/lib/dto/Dto'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CreateStoreDto extends Dto<CreateStoreDto> {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsBoolean()
  public: boolean
}
