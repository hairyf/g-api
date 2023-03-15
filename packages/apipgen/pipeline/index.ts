import type { PipelineDest, PipelineFlow, PipelineRead } from '../typings'
/**
 * create apipgen pipeline process
 * @param readConfig read config pa
 * @param original get the source according to config
 * @param parser resolve source as available data
 * @param compiler compile parse info conversion AST tree
 * @param generate generate code
 * @param dest dest file
 * @returns
 */
export function pipeline(
  readConfig: PipelineRead,
  original: PipelineFlow,
  parser: PipelineFlow,
  compiler: PipelineFlow,
  generate: PipelineFlow,
  dest: PipelineDest,
) {
  return () => ({
    readConfig,
    original,
    parser,
    compiler,
    generate,
    dest,
  })
}
