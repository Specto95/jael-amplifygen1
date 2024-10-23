import { HeadingProps } from '../interfaces/Heading'

export function PrimaryHeading({title} : HeadingProps) {
  return (
    <h1 className="heading__primary">
        {title}
    </h1>
  )
}
