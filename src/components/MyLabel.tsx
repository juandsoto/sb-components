import './mylabel.css';

export interface Props {
	/**
	 * Text showed inside the component
	 */
	label: string;
	/**
	 * 	Size of the component
	 */
	size?: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * 	Uppercase component´s text
	 */
	allCaps?: boolean;
	/**
	 * Text color
	 */
	color?: 'primary' | 'secondary' | 'tertiary';
	/**
	 * Custom text color
	 */
	customTextColor: string;
	/**
	 * Custom background color
	 */
	backgroundColor?: string;
}

export const MyLabel = (props: Props) => {
	const {
		label = 'No Label',
		size = 'normal',
		allCaps = false,
		color = 'primary',
		customTextColor,
		backgroundColor = 'transparent'
	} = props;
	return (
		<span
			style={{ color: customTextColor, backgroundColor }}
			className={['label', size, `text-${color}`].join(' ')}
		>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
