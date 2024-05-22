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
