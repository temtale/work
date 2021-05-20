const member = {
    //キー: バリュー
    'name': 'ホンダ',
    'height': '170',
    'hobby': 'サッカー'
};
console.log(member.height);

const member_2 = {
    'ホンダ':{
        'height': 170,
        'hobby': 'サッカー'
    },
    '香川':{
        'height': 165,
        'hobby': 'サッカー'
    }

};

console.log(member_2['香川']['hobby']);