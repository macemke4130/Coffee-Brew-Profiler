export interface IPost {
    id: number,
    user_id: number,
    title: string,
    content: string,
    is_visible: number,
    created_at: Date,
    updated_at: Date,
    username: string
}

export interface IOption {
    id: number,
    name: string
}

export interface ICoffeeBag {
    id: number,
    baristaid: number,
    coffeename: string,
    region: string,
    elevation: number,
    breed: string,
    blend: number,
    brand: string,
    process: string
}

export interface IBrew {
    id: number,
    _createdat: Date,
    roasteddate: Date,
    grindsize: number,
    gramspregrind: number,
    gramspostgrind: number,
    watertempprebrew: number,
    watertemppostbrew: number,
    bloomtimeinsec: number,
    bloomweight: number,
    brewtimeinsec: number,
    brewweight: number,
    drawdown: number,
    yeild: number,
    coffeebagid: number,
    coffeebrand: number,
    coffeename: string,
    grinder: string,
    brewmethod: string,
    brandname: string
}


export interface IBarista {
    id: number,
    is_active: number,
    role: number,
    username: string,
    email: string,
    bloom: number,
    password: string,
    _created: Date
}