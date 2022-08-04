/* eslint-disable prettier/prettier */
import styles from './BaseTemplate.module.sass'

export interface IBaseTemplate {
  sampleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
  sampleTextProp,
}): JSX.Element => <div className={styles.container}>{sampleTextProp}</div>

export default BaseTemplate
