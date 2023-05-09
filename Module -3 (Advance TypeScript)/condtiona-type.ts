type Sheikh ={
    wife1: string,
    wife2: string,
}

type A = keyof Sheikh;

type CheckProperty <T, K> = K extends keyof Sheikh ? true : false;
// type CheckProperty <T> = T extends ' wife1' ? true : false; 

type CheckWife2 = CheckProperty<Sheikh, 'girlfriend'>

type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe'

type RemoveBandhubi <T, K> = T extends K? never : T

type CurrentBandhubi  = RemoveBandhubi<Bandhubi, 'Rachel'>