import React,{Component} from 'react';
import form from '../css/form.css';


class Page4 extends Component{

    render(){
        const {handleChange} = this.props;

        return(
            <div className="container formContainer">

            <h1>Page 4</h1>

            <label>Do you have have any specific question we can answer?
                         <textarea

                        type="text-area"
                        name = "gsSpecificQuestion"
                        placeholder=""
                        onChange={handleChange('gsSpecificQuestion')}


                        />

                    </label>
                    <label>Tell us more about you:
                         <textarea

                        type="text-area"
                        name = "gsaboutYou"
                        placeholder=""
                        onChange={handleChange('gsaboutYou')}


                        />

                    </label>


            </div>
        )
    }
}

export default Page4;
