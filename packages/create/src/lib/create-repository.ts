import type { JSONSchemaForNPMPackageJsonFiles as PackageJson } from '@package-json/types'

export const createRepository = ({ bugs, homepage, repository }: PackageJson): PackageJson => ({
  bugs, // TODO: fallback `${repository.url}/issues`
  homepage, // TODO: fallback repository.url
  repository: repository instanceof Object
    ? {
        ...repository,
        directory: repository.directory, // TODO: check directory
      }
    : repository,
})
