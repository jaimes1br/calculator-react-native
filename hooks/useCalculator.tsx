import { useRef, useState } from "react";

enum Operadores  {
    sumar,restar,multiplicar,dividir
}

export const useCalculator = () => {
    const [num, setNum] = useState('0');
    const [numPrev, setNumPrev] = useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const clear = () => {
        setNum('0');
        setNumPrev('0');
    }

    const armarNumero = (numText: string) => {
        if(num.includes('.') && numText === '.') return
        if(num.startsWith('0') || num.startsWith('-0')){
            if(numText === '.'){
                setNum(num + numText);
            }else if(numText === '0' && num.includes('.')){
                setNum(num + numText);
            }else if(numText !== '0' && !num.includes('.')){
                setNum( numText )
            }else if(numText === '0' && num.includes('.')){
                setNum(num)
            }else{
                setNum(num + numText)
            }
        }else{
            setNum ( num + numText);
        }
    }

    const positivoNegativo = () => {
        if(num.includes('-')){
            setNum(num.replace('-',''));
        }else{
            setNum('-' + num);
        }
    }

    const btnDel = () => {
        let negativo = (num.includes('-'));

        if(num.length === 1 || negativo && num.length === 2){
            setNum('0');
        }else {
            setNum(num.slice(0, num.length -1))
        }
    }

    const cambiarNumPrev = () => {
        if(num.endsWith('.')){
            setNumPrev(num.slice(0,-1));
        }else{
            setNumPrev(num);
        }

        setNum('0');
    }

    const btnDividir = () => {
        ultimaOperacion.current = Operadores.dividir
        if(numPrev !== '0' && num !== '0'){
            calcular();
        }else{
            cambiarNumPrev();
        }
    }

    const btnMultiplicar = () => {
        ultimaOperacion.current = Operadores.multiplicar
        if(numPrev !== '0' && num !== '0'){
            calcular();
        }else{
            cambiarNumPrev();
        }
    }

    const btnRestar = () => {
        ultimaOperacion.current = Operadores.restar
        if(numPrev !== '0' && num !== '0'){
            calcular();
        }else{
            cambiarNumPrev();
        }
    }

    const btnSumar = () => {
        ultimaOperacion.current = Operadores.sumar
        if(numPrev !== '0' && num !== '0'){
            calcular();
        }else{
            cambiarNumPrev();
        }
    }

    const calcular = () => {
        const num1 = Number(num);
        const num2 = Number(numPrev);

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setNum(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNum(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNum(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNum(`${num2 / num1}`);
                break;
        }
        
        setNumPrev(num);
    }

    return {
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
    }
}