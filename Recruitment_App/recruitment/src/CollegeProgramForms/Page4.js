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
                        name = "cpSpecificQuestion"
                        placeholder=""
                        onChange={handleChange('cpSpecificQuestion')}


                        />

                    </label>
                    <label>Tell us more about you:
                         <textarea

                        type="text-area"
                        name = "cpaboutYou"
                        placeholder=""
                        onChange={handleChange('cpaboutYou')}


                        />

                    </label>

                    <label>Do you have any program or topic idea for future programs?:
                         <textarea

                        type="text-area"
                        name = "cptopicIdea"
                        placeholder=""
                        onChange={handleChange('cptopicIdea')}


                        />

                    </label>

            </div>
        )
    }
}

export default Page4;
