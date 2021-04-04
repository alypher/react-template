import React from 'react';
import './styles.css'

const BaseComponent = ({label, show, list, ...props}) => (
  <div 
    style={{backgroundColor: props.backgroundColor}}
    className="example"
  > 
    {show && 
      label
    }

    <br/>

    {( list && Array.isArray(list) ) &&
      list?.map(el => {
        return (
          <>
            <span>{el}</span> 
            <br />
          </>
        )
      })
    }
  </div>
)

export default {
  title: 'Components/Example',
  component: BaseComponent,
  argTypes: {
    backgroundColor: { 
      name: 'Background Color',
      type: { name: 'color', required: false },
      description: "Div's Background color",
      table: {
        type: { summary: 'color' },
      },
      control: 'color',
    },
    label: {
      name: 'Label',
      type: { name: 'string', required: true },
      defaultValue: 'Title',
      description: "Div's Title",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Title' },
      },
      control: {
        type: 'text'
      }
    },
    show: {
      name: 'Show Title',
      type: { name: 'boolean', required: false },
      defaultValue: true,
      description: "Control apresentation of div's title",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean'
      }
    },
    list: {
      name: 'Items list',
      type: { name: 'array', required: false },
      description: "Show a list of values",
      table: {
        type: { summary: 'array' },
      },
      control: {
        type: 'array'
      }
    }
  },
};

const Template = (args) => <BaseComponent {...args} />;

export const Simple = Template.bind({})
Simple.args = {
  list: [1,2,3],
}