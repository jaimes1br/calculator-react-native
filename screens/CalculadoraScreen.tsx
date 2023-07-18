import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { BotonCal } from '../components/BotonCal';
import { useCalculator } from '../hooks/useCalculator';

export const CalculadoraScreen = () => {
   
    const {
        num,
        numPrev,
        clear,
        positivoNegativo,
        btnDel,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }  = useCalculator();

    return (
        <View style={ styles.calculadoraContainer}>
            {
                (numPrev !== '0') && (<Text style={styles.resultadoPequeno}>{numPrev}</Text>)
            }
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                { num }
            </Text>
            <View style={styles.fila}>
                <BotonCal texto="C" color='gray' action={ clear }/>
                <BotonCal texto="+/-" color='gray' action={ positivoNegativo }/>
                <BotonCal texto="del" color='gray' action={ btnDel }/>
                <BotonCal texto="/" color='orange' action={ btnDividir }/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto="7" action={armarNumero}/>
                <BotonCal texto="8" action={armarNumero}/>
                <BotonCal texto="9" action={armarNumero}/>
                <BotonCal texto="x" color='orange' action={ btnMultiplicar }/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto="4" action={armarNumero}/>
                <BotonCal texto="5" action={armarNumero}/>
                <BotonCal texto="6" action={armarNumero}/>
                <BotonCal texto="-" color='orange' action={ btnRestar }/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto="1" action={armarNumero}/>
                <BotonCal texto="2" action={armarNumero}/>
                <BotonCal texto="3" action={armarNumero}/>
                <BotonCal texto="+" color='orange' action={ btnSumar }/>
            </View>
            <View style={styles.fila}>
                <BotonCal texto="0" action={armarNumero} ancho/>
                <BotonCal texto="." action={armarNumero}/>
                <BotonCal texto="=" color='orange' action={ calcular }/>
            </View>
        </View>
    )
}
