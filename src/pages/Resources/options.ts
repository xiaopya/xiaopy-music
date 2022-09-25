export const options = [
    {
        label: 'Light',
        value: 19991,
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
            children: [],
        })),
    },
    {
        label: 'Bamboo',
        value: 1999,
        children: [
            {
                label: 'Little',
                value: 2000,
                children: [
                    {
                        label: 'Toy Fish',
                        value: 2001,
                        children: [],
                    },
                    {
                        label: 'Toy Cards',
                        value: 2002,
                        children: [],
                    },
                    {
                        label: 'Toy Bird',
                        value: 2003,
                        children: [],
                    },
                ],
            },
        ],
    },
];
