export interface BlogFrontmatter {
  title:       string
  description: string
  date:        string
  author:      string
  category:    string
  tags:        string[]
  image:       string
  slug:        string
  featured?:   boolean
}

export interface BlogMeta extends BlogFrontmatter {
  readingTime: string
}

export interface BlogPost extends BlogMeta {
  content: string
}

export interface CityData {
  slug:          string
  name:          string
  state:         string
  costPerSqft:   { min: number; max: number }
  avgProjectCost:string
  popularAreas:  string[]
  climate:       string
  description:   string
}
