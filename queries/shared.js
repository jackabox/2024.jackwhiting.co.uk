export const seomatic = `
seomatic(asArray: true) {
    metaJsonLdContainer
    metaLinkContainer
    metaScriptContainer
    metaSiteVarsContainer
    metaTagContainer
    metaTitleContainer
}`

export const featuredServices = `
featuredServices {
	... on featuredServices_Entry {
	  heading
	  summary
	  services {
	    ... on Service_Entry {
	      summary
	      title
	    }
	  }
	}
}`
