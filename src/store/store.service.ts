import { Injectable } from '@nestjs/common'
import { CreateStoreDto } from './dto/create-store.dto'
import { UpdateStoreDto } from './dto/update-store.dto'
import { EntityManager, Repository } from 'typeorm'
import { Store } from './entities/store.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store),
    private readonly storeRepository: Repository<Store>,
    private readonly entityManager: EntityManager
    
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    const item = new Store(createStoreDto)
    await this.entityManager.save(item)
    return new Store({
      id: item.id,
      name: item.name,
      public: item.public,
    })
  }

  async findAll() {
    return this.storeRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} store`
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`
  }

  remove(id: number) {
    return `This action removes a #${id} store`
  }
}
