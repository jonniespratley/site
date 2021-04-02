export interface Root {
  main: Main
  IResume: IResume
  IPortfolio: IPortfolio
}

export interface Main {
  name: string
  occupation: string
  description: string
  image: string
  bio: string
  contactmessage: string
  email: string
  phone: string
  IAddress: IAddress
  website: string
  resumedownload: string
  ISocial: ISocial[]
}

export interface IAddress {
  street: string
  city: string
  state: string
  zip: string
}

export interface ISocial {
  name: string
  url: string
  className: string
}

export interface IResume {
  skillmessage: string
  IEducation: IEducation[]
  IWork: IWork[]
  skills: ISkill[]
}

export interface IEducation {
  school: string
  degree: string
  graduated: string
  description: string
}

export interface IWork {
  id: number
  company: string
  title: string
  years: string
  skills?: string
  description: string
}

export interface ISkill {
  name: string
  level: number
  description: string
  icon?: string
}

export interface IPortfolio {
  projects: IProject[]
  publications: IPublication[]
}

export interface IProject {
  title: string
  body: string
  image: string
  url: string
}

export interface IPublication {
  title: string
  subtitle: string
  date: string
  body: string
  image: string
  url?: string
}
