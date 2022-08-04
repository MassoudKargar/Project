/* eslint-disable prettier/prettier */
import styles from './BaseTemplate.module.css'

export interface IBaseTemplate {
  sampleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
  sampleTextProp,
}): JSX.Element => {
  return <div className={styles.container}>{sampleTextProp}</div>
}

export default BaseTemplate
