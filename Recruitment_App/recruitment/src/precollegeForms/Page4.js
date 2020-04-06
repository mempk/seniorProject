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
                        name = "SpecificQuestion"
                        placeholder=""
                        onChange={handleChange('SpecificQuestion')}


                        />

                    </label>
                    <label>Tell us more about you:
                         <textarea

                        type="text-area"
                        name = "aboutYou"
                        placeholder=""
                        onChange={handleChange('aboutYou')}


                        />

                    </label>

                    <label>Do you have any program or topic idea for future K-12 programs?:
                         <textarea

                        type="text-area"
                        name = "topicIdea"
                        placeholder=""
                        onChange={handleChange('topicIdea')}


                        />

                    </label>

            </div>
        )
    }
}

export default Page4;
