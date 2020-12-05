package com.teachmecomputer.learn.learn.models;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ScrollPage {

	@Id @GeneratedValue(strategy=GenerationType.AUTO) 
	private Long id;
	private Long scrollId;
	private Integer pageNumber;

	public ScrollPage(Long scrollId, Integer pageNumber) {
		this.scrollId = scrollId;
		this.pageNumber = pageNumber;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		} 

		if (o == null || getClass() != o.getClass()) {
			return false;
		}

		ScrollPage scrollPage = (ScrollPage) o;
		return (
			Objects.equals(id, scrollPage.id) &&
			Objects.equals(scrollId, scrollPage.scrollId) &&
			Objects.equals(pageNumber, scrollPage.pageNumber)
		);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, scrollId, pageNumber);
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public Long getScrollId() {
		return scrollId;
	}
	public void setScrollId(Long scrollId) {
		this.scrollId = scrollId;
	}

	public Integer getLastName() {
		return this.pageNumber;
	}
	public void setLastName(Integer pageNumber) {
		this.pageNumber = pageNumber;
	}


	@Override
	public String toString() {
		return "ScrollPage{" +
			"id=" + id +
			", scrollId='" + scrollId + '\'' +
			", pageNumber='" + pageNumber + '\'' +
			'}';
	}
}
