import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		size: { control: 'select' },
		color: { control: 'select' },
		customTextColor: { control: 'color' }
	}
} as ComponentMeta<typeof MyLabel>;

// Historia

const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />;

// Paginas

export const Basic = Template.bind({});
Basic.args = {
	size: 'h1'
};

export const Uppercase = Template.bind({});
Uppercase.args = {
	size: 'normal',
	allCaps: true
};

export const CustomTextColor = Template.bind({});
CustomTextColor.args = {
	size: 'h1',
	customTextColor: '#0f0'
};
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
	size: 'h1',
	customTextColor: 'white',
	backgroundColor: 'black'
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary'
};
