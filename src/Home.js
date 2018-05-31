import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import './Home.css';
import connect from './connect';

class Home extends React.Component {

  state = {
    doc: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchHome(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchHome(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchHome(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('home', 'home', {}, (err, doc) => {
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
				<div data-wio-id={this.state.doc.id}>
          <div id="home" className="page_wrapper">

            <section className="container">

              <div className="page">

                <div className="flexslider-container">
                  <div id="slider" className="flexslider">
                    <ul className="slides">
                      <li>
                        <img src={this.state.doc.data.hero_image.url} alt="Books Beyond Boundaries" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="help" className="framed_box">
                  <div className="text">
                    <h3>Get Involved</h3>
                    <span className="color">Stay connected with BBB and get the latest updates.</span>
                  </div>
                  <a href="https://ucsd.us12.list-manage.com/subscribe?u=3f52e7d7a72ee5f354cac7ec5&id=bfc189490d" target="_blank" className="donate_button">Join Today!</a>
                </div>
                <div id="items">
                  <div className="news one_third">
                    <div className="box_heading">
                      <h2>Summer Application</h2>
                      <span className="line"></span>
                    </div>
                    <div className="title">Apply by June 10th to join BBB at UC San Diego</div>
                    <a href="http://goo.gl/forms/BRilU89osTgPi5MK2" target="_blank" className="donate_button">Apply Today</a>
                    <div className="resources">
                      <hr />
                      <h5>Resources</h5>
                      <a className="pull-left" href="http://bbb.ucsd.edu/files/Student%20Passenger%20-%20Voluntary%20Waiver%20form%20for%20CST.pdf" target="_blank">Download CST Waiver</a><br />
                    </div>
                  </div>
                  <div className="events one_third">
                    <div className="box_heading">
                      <h2>Events</h2>
                      <span className="line"></span>
                    </div>
                    <div className="fb-page" data-href="https://www.facebook.com/bbbucsd/" data-tabs="events" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/bbbucsd/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bbbucsd/">Books Beyond Boundaries at UC San Diego</a></blockquote></div>
                  </div>
                  <div id="sponsors" className="one_third column_last">
                    <div className="box_heading">
                      <h2>Timeline</h2>
                      <span className="line"></span>
                    </div>
                    <div className="fb-page" data-href="https://www.facebook.com/bbbucsd/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/bbbucsd/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bbbucsd/">Books Beyond Boundaries at UC San Diego</a></blockquote></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
				</div>
			);
		} else if (this.state.notFound) {
			return <NotFound />;
		}
		return <h1>Loading</h1>;
	}
}

export default connect(Home);
