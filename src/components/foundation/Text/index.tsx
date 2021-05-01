import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propToStyle'
import get from 'lodash/get'
import React from 'react'
import Link from '../Link'
import { WebsitePagesContext } from '../../wrappers/WebsitePage/context'

import { TextStyleVariants } from '../TextStyleVariants'

export { TextStyleVariants } from '../TextStyleVariants'

interface Props {
	tag?: 'p' | 'span' | 'h1' | 'a' | any;
	variant: string;
	textAlign?: string | object;
	marginBottom?: string | object;
	margin?: string | object;
	padding?: string | object;
	marginLeft?: string | object;
	marginTop?: string | object;
	textDecoration?: string | object;
	color?: string | object;
	children: React.ReactNode;
	type?: string;
	role?: string;
	placeholder?: string;
	name?: any;
	onChange?: () => void;
	value?: any;
	href: string;
  dangerouslySetInnerHTML?: any;
	cmsKey?: string;
}

const TextBase = styled.span<Props>`
	${(props) => TextStyleVariants[props.variant]}
	color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

	${propToStyle('textAlign')}
	${propToStyle('marginBottom')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('dangerouslySetInnerHTML')}
`

export default function Text ({
  tag,
  variant,
  children,
  href,
  cmsKey,
  ...props
}: Props) {
  const websitePageContext = React.useContext(WebsitePagesContext)
  const componentContent = cmsKey
	  ? websitePageContext.getCMSContent(cmsKey)
    : children

  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
				cmsKey={cmsKey}
        {...props}
      >
        {componentContent}
      </TextBase>
    )
  }
  return (
		<TextBase
		  as={tag}
			variant={variant}
			href={href}
			cmsKey={cmsKey}
		  {...props}
		>
			{componentContent}
		</TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: ''
}
