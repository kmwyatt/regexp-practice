const str = `
010-1234-5678
the1234@abcdefg.com
http://localhost:1234
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
`

console.log(
    str.match(/(?<=@).{1,}/g)
)