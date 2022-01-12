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
}

export const MyLabel = (props: Props) => {
	const {
		label = 'No Label',
		size = 'normal',
		allCaps = false,
		color = 'primary',
		customTextColor
	} = props;
	return (
		<span
			style={{ color: customTextColor }}
			className={['label', size, `text-${color}`].join(' ')}
		>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
