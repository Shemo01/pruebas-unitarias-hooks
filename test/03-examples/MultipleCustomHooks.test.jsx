import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    //TODO: Limpia todas las llamadas existentes a los mocks
    beforeEach( () =>{
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto ', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));
        //TODO:Toma del button del componente por nombre, id o texto
        const nexButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nexButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un quote ', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Pedro Picapiedra', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Pedro Picapiedra')).toBeTruthy();
        const nexButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nexButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Pedro Picapiedra', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        const nexButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nexButton);
        expect(mockIncrement).toHaveBeenCalled();
    })




})
