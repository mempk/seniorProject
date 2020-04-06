import React,{Component} from 'react';
import footer from '../css/footer.css';




class Footer extends Component{


    render(){
        return(
            <div className="Footer">
                <div className="container">
                <div className="row">
                    <div className="about col-lg-8 col-md-6 col-sm-11">
                        <h3>About Outreach</h3>
                        <p>The Office of Pre-College Programs offers programs, events, and competitions that have been designed to challenge talented K-12 students to experience academic rigor and success at levels above what is expected of their age group.</p>
                        <p>The variety of programs and activities in our office encourage students to strengthen skills and to grow academically and personally, providing them the necessary tools to bridge the gap between levels and to help them succeed in their next academic level.</p>


                    </div>
                    <div className="contact col-lg-4 col-md-6 col-sm-11">

                        <h5>Contact Outreach</h5>
                        <h4>(662) 915-7283</h4>
                        <h6>Fax: (662) 915-5138</h6>
                        <h6>outreach@olemiss.edu</h6>




                    </div>
                </div>
                </div>

            </div>

        )
    }
}

export default Footer;