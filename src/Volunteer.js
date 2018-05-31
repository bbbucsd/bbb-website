import React from 'react';
import NotFound from './NotFound';
import { RichText }from 'prismic-reactjs';
import connect from './connect';

class Volunteer extends React.Component {

  state = {
    doc: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchVolunteer(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchVolunteer(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchVolunteer(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('volunteer', 'volunteer', {}, (err, doc) => {
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

  renderHeroImage() {
    if (this.state.doc.data.hero_image) {
      return (
        <img src={this.state.doc.data.hero_image.url} className="rounded" style={{ width: "100%" }}/>
      );
    } else {
      return null;
    }
  }

	render() {
		if (this.state.doc) {
      console.log(this.state);
			return (
        <div data-wio-id={this.state.doc.id}>
          <div className="page_wrapper">
            <section className="container">

              <div id="volunteer" className="page">
                <h1>{RichText.asText(this.state.doc.data.title)}</h1>

                {this.renderHeroImage()}
                <div className="full">
                  {RichText.render(this.state.doc.data.body)}
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

export default connect(Volunteer);
