import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props {
    texto: string
    color?: 'gray' | 'orange' | 'default'
    ancho?: boolean
    action: (numText: string) => void;
}

export const BotonCal = ({texto, color = 'default', ancho = false, action}: Props) => {
    const colorBtn = {
        'gray':  '#9B9B9B',
        'orange': '#FF9427',
        'default': '#2D2D2D'
    } 
  
    return (
        <TouchableOpacity onPress={() => action(texto)}>
            <View style={{
                ...styles.boton, 
                backgroundColor: colorBtn[color],
                width: (ancho) ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: color === 'gray' ? 'black' : 'white',
                    textAlign: (ancho) ? 'left' : 'center',
                    paddingLeft: (ancho) ? 30 : 10
                }}>
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>
  )
}
