import React, { Component } from 'react';

class Gmap extends Component {
    
    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadJS('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1854.6016031319557!2d-111.8733841!3d40.5799666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287e397a7338b%3A0xb700da3dd736cb50!2sSleep+Disorders+Clinic!5e0!3m2!1sen!2sus!4v1520634112563')
    }
    
    initMap() {
        map = new google.maps.Map(this.refs.map.getDOMNode(), {} );
    }
    
    render() {
            return (
                <div>
                    <div ref="map">
                    </div>
                </div>
            );
    }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Gmap;