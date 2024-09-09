import type { PackageJson, PackageJsonRepository } from './types'

export const createRepository = ({ bugs, homepage, repository }: PackageJson): PackageJsonRepository => ({
  bugs, // TODO: fallback `${repository.url}/issues`
  homepage, // TODO: fallback repository.url
  repository: repository instanceof Object
    ? {
        ...repository,
        directory: repository.directory, // TODO: check directory
      }
    : repository,
})
