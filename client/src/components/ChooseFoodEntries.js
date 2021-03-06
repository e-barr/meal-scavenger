import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { setSelectedFoods, fetchAndAddRestaurants } from '../actions'

const renderField = ({ input }) => {
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
    onSubmit = (formValues) => {
        const zipCode = this.props.zipCode
        const food = Object.values(formValues)
        this.props.setSelectedFoods(formValues)
        this.props.fetchAndAddRestaurants(food, zipCode)
    }

    renderForm = () => {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
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

const mapStateToProps = (state) => {
    return {
        zipCode: state.content.startAddress.zipCode
    }
}

export default connect(mapStateToProps, { setSelectedFoods, fetchAndAddRestaurants })(formWrapped);