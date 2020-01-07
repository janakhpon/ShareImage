import React from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { URL_LIST } from '../../Requests'
const formData = new FormData()



class PageListUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            image: null
        }
    }

    handleDescription = (e) => {
        e.preventDefault();
        this.setState({
            description: e.target.value
        });
        formData.set('description', e.target.value);
    }


    handleImage = (e) => {
        this.setState({
            image: e.target.files
        });

        formData.append('image', e.target.files[0]);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            let response = await axios({
                method: 'post',
                url: URL_LIST,
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })

            console.log('crap')
        }catch(err){
            console.log(err)
        }


    }



    render() {
        return (
            <>
                <Grid container direction="row" justify="center" alignitems="center">
                    <Grid item xs={12}>
                        <form action="/">

                            <div className="row form-group">

                                <div className="col-md-12">
                                    <label className="text-black" htmlFor="description">Device description</label>
                                    <input type="text" id="description" name="description" className="form-control" onChange={this.handleDescription} />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label htmlFor="image">Your Art</label>
                                    <input type="file" className="form-control-file" id="image" name="image" ref={this.image} onChange={this.handleImage} />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="submit" value="upload to Gallery" className="btn btn-primary py-2 px-4 text-white" onClick={this.handleSubmit} />
                                </div>
                            </div>
                        </form>

                    </Grid>
                </Grid>

            </>
        );
    }


}

export default PageListUpload