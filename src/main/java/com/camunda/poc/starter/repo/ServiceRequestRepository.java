package com.camunda.poc.starter.repo;

import com.camunda.poc.starter.entity.ServiceRequestEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceRequestRepository extends PagingAndSortingRepository<ServiceRequestEntity, Long>{

//	@Query("select l from renewal l where l.end <= ?1 and l.renewalStarted = false and l.renewalCompleted = false")
//	public List<Renewal> findByEndDate(Date date);
//
//	@Query("select l from renewal l where l.renewalStarted = true and l.renewalCompleted = false ORDER BY l.showDate DESC")
//	public List<Renewal> findStarted();
//
	List<ServiceRequestEntity> findServiceRequestEntitiesByApprovedAndStarted(
		@Param("approved") Boolean approved, @Param("started") Boolean started);

	List<ServiceRequestEntity> findServiceRequestEntitiesByRejectedAndStarted(
			@Param("rejected") Boolean rejected, @Param("started") Boolean started);

	ServiceRequestEntity findServiceRequestByServiceId(@Param("serviceId") String serviceId);


}
