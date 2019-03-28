function Id(value) {
    return {
        map: function(f) {
            return Id.of(f(value));
        },
        chain: function(f) {
            return f(value);
        },
        toString: () => `Id(${value})`
    };
}

Id.of = Id;

const g = n => Id(n + 1);
const f = n => Id(n * 2);

g(5).chain(x => {
    console.log(x);
});

console.log(f(3).chain(Id.of));

Id(1)
    .chain(g)
    .chain(f)
    .chain(console.log);
