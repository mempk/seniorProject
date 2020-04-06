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
                        <p>The mission of the Division of Outreach and Continuing Education is to serve the University and the community by facilitating and providing high-quality learning experiences.</p>
                        <p>The Division values integrity, quality, and efficiency in the creation and implementation of innovative educational strategies to engage minds, to transform lives, and to serve others. We seek to inspire change and growth by building relationships and working collaboratively with University students, faculty, staff, alumni, and partners from the region, state, nation, and beyond.</p>


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