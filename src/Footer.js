import React from 'react';
import NotFound from './NotFound';
import { RichText }from 'prismic-reactjs';
import './Footer.css';

// Declare your component
export default class Footer extends React.Component {

  state = {
    doc: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchFooter(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchFooter(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchFooter(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('footer', 'footer', {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

	render() {
		if (this.state.doc) {
			return (
        <footer id="footer" data-wio-id={this.state.doc.id}>
          <div className="container">
            <div className="widget one_fourth">
              <h5 className="logo">BBB at<br /> UC San Diego</h5>
              {RichText.render(this.state.doc.data.about)}
            </div>
            <div className="widget one_fourth">
              <h5>Like Us On Facebook</h5>
              <div className="fb-like" data-href="https://www.facebook.com/bbbucsd/" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
            </div>
            <div className="widget one_fourth">
              <h5>Resources</h5>
              <a className="pull-left" href="http://bbb.ucsd.edu/files/Student%20Passenger%20-%20Voluntary%20Waiver%20form%20for%20CST.pdf" target="_blank">Download Voluntary Waiver Form</a><br />
            </div>
            <div className="widget one_fourth column_last">
              <h5>Contact Us</h5>
              <div className="location_widget">
                <p>
                  <span className="icon general">h</span> <a href="mailto:bbb@ucsd.edu" target="_blank">bbb@ucsd.edu</a> <br/>
                </p>
              </div>
            </div>

          </div>
        </footer>
			);
		} else if (this.state.notFound) {
			return <NotFound />;
		}
    return null;
	}
}
