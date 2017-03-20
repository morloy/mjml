import mjml2html, {
  registerComponent,
} from 'mjml-core'
import { registerDependencies } from 'mjml-validator'
import dependencies from './dependencies'

registerComponent(require('mjml-head-attributes'))
registerComponent(require('mjml-head-font'))
registerComponent(require('mjml-head-style'))
registerComponent(require('mjml-head-title'))
registerComponent(require('mjml-column'))
registerComponent(require('mjml-container'))
registerComponent(require('mjml-divider'))
registerComponent(require('mjml-image'))
registerComponent(require('mjml-raw'))
registerComponent(require('mjml-section'))
registerComponent(require('mjml-text'))
registerComponent(require('mjml-table'))

registerDependencies(dependencies)

export default function (mjml, options) {
  return mjml2html(mjml, options)
}
