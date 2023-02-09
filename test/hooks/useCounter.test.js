import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Prueba en el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {
        //TODO:Sujeto de pruebas 
        const { result } = renderHook(() => useCounter());
        //TODO: renderHook Permite reenderizar un hook 
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });


    test('Debe de generar el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        //TODO: Para validar cambios de estado se debe implementar act(); de @testing-library/react
        act(() => {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(103);
    });

    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;
        //TODO: Para validar cambios de estado se debe implementar act(); de @testing-library/react
        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(97);
    });

    test('debe de realizar el reset el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, reset } = result.current;
        //TODO: Para validar cambios de estado se debe implementar act(); de @testing-library/react
        act(() => {
            increment(2);
            reset();
        });
        expect(result.current.counter).toBe(100);
    });
});
