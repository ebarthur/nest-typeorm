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
    private readonly entityManager: EntityManager,
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

  async findOne(id: number) {
    return this.storeRepository.findOneBy({ id })
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    const item = await this.storeRepository.findOneBy({ id })
    item.public = updateStoreDto.public
    await this.entityManager.save(item)
  }

  remove(id: number) {
    return this.storeRepository.delete({ id })
  }
}
