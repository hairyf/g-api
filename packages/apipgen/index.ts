import ora from 'ora'
import pPipe from 'p-pipe'
import type ApiPipeline from './typings'
import { inPipeline } from './utils'

export async function openPipeWebClientGenerator(config: ApiPipeline.Config | ApiPipeline.Config[]) {
  const configs: ApiPipeline.Config[] = Array.isArray(config) ? config : [config]
  const spinner = ora('Generate API File...\n').start()

  const threads = configs.map((config) => {
    const usePipeline = inPipeline(config.pipeline || 'swag-axios-ts')
    if (!usePipeline)
      throw new Error(`Pipeline not found ${config.pipeline}`)
    const pipeline = usePipeline()
    const thread = pPipe(
      pipeline.readConfig,
      pipeline.original,
      pipeline.parser,
      pipeline.compiler,
      pipeline.generate,
      pipeline.dest,
    )
    return thread(config)
  })

  try {
    await Promise.all(threads)
    spinner.succeed()
    spinner.clear()
  }
  catch (error: any) {
    spinner.clear()
    spinner.fail('Generate API File Error')
    console.error(error)
  }
}

export * from './config'
export * from './typings'
export * from './pipeline'
