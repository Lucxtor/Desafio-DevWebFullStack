interface IRequest {
    valor: number;
}

class CalculateDividersUseCase {
    execute({ valor }: IRequest): number {
        const factors = [];
        let aux = valor;

        while (aux !== 1) {
            let count = 2;
            // eslint-disable-next-line no-constant-condition
            while (true) {
                if (aux % count === 0) {
                    factors.push(count);
                    aux /= count;
                    break;
                }
                count += 1;
            }
        }

        let count = 1;
        let factor = 1;
        let dividers = 1;
        for (count; count <= factors.length; count += 1) {
            if (factors[count] === factors[count - 1]) {
                factor += 1;
            } else {
                factor += 1;
                dividers *= factor;
                factor = 1;
            }
        }

        return dividers;
    }
}

export { CalculateDividersUseCase };
