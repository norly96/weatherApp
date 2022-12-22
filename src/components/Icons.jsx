const Icons = (icon) => {
    switch (icon) {
        case '1' || '2' || '3':
            icon='icons/wi-cloudy.svg'
            console.log('Cloudy')
            break;    
        case '45' || '48':
            icon='icons/wi-day-fog.svg'
            console.log('Fog');
            break;
        case '51' || '53' || '55':
            icon='icons/wi-day-hail.svg'
            console.log('Drizzle');
            break;                        
        case '56' || '57':
            icon='icons/wi-night-alt-sleet.svg'
            console.log('Freezing Drizzle');
            break;
        case '61' || '63' || '65':
            icon='icons/wi-rain-mix.svg'
            console.log('Rain');
            break;  
        case '66' || '67':
            icon='icons/wi-rain.svg'
            console.log('Freezing Rain');
            break;  
        case '71' || '73' || '75':
            icon='icons/wi-night-snow.svg'
            console.log('Snow Fall ');
            break;    
        case '77':
            icon='icons/wi-snow.svg'
            console.log('Snow Grains');
            break;   
        case '80' || '81' || '82':
            icon='icons/wi-day-showers.svg'
            console.log('Rain Showers');
            break;    
        case '85' || '86':
            icon='icons/wi-snow-wind.svg'
            console.log('Snow Showers');
            break;
        case '95':
            icon='icons/wi-thunderstorm.svg'
            console.log('Thunderstorm');
            break;
        case '96' ||'99':
            icon='icons/wi-night-thunderstorm.svg'
            console.log('ThunderstormWith');
            break;          
        default:
            icon='icons/wi-day-sunny.svg'
            console.log('Clean');    
    }
return icon
}

export default Icons