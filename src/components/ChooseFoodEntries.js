import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, type }) => {
    console.log(input)
    return (
     <div>
         <input
            {...input} 
            placeholder={input.name}
         />
     </div>   
    )
}

class ChooseFoodEntries extends Component {
    renderForm = () => {
        return (
            <form
                onSubmit={(formValues) => console.log(formValues)}
            >

                <Field 
                    name="first food"
                    component={renderField}
                    type="text"
                />

                <Field 
                    name="second food"
                    component={renderField}
                    type="text"
                />

                <Field 
                    name="third food"
                    component={renderField}
                    type="text"
                />

                <button>start scavenging!</button>

            </form>
        )
    }

    render() {
        return (
                <div className="choose-food-entries">
                    What do you want the best of? (ex. curry, pizza, etc.)
                    <br />
                    Enter up to three choices below:
                    <br />
                    <br />
                    {this.renderForm()}
                </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'pickThreeFoodsForm'
})(ChooseFoodEntries)

export default connect(null)(formWrapped);